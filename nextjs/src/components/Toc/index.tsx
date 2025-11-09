'use client';

import Link from 'next/link';
import { useEffect, useState, MouseEvent } from 'react';
import * as cheerio from 'cheerio';

type TocItem = {
  text: string;
  id: string;
};

const renderToc = (content: string) => {
  const $ = cheerio.load(content);
  const headings = $('h1, h2, h3').toArray();
  return headings.map((el) => ({
    id: el.attribs.id,
    text: $(el).text(),
  }));
};

type Props = {
  content: string;
};

export default function Toc({ content }: Props) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [focus, setFocus] = useState<string>('');

  useEffect(() => {
    const toc = renderToc(content);
    setToc(toc);
  }, [content]);

  useEffect(() => {
    if (toc.length === 0) {
      console.log('No TOC items available');
      return;
    }

    if (!focus && toc.length !== 0) {
      setFocus(toc[0].id);
    }

    const hash = window.location.hash.substring(1);
    console.log('hash:', hash);

    if (hash) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        const headerOffset = window.innerHeight * 0.08;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        setFocus(hash);
      }
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries.find((entry) => entry.isIntersecting);
      if (entry) {
        setFocus(entry.target.id);
      }
    };

    const options = {
      root: null,
      //   rootMargin: '-80px 0px -80% 0px',
      rootMargin: '0px 0px -80% 0px', // こっちの方がいいかも？
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    const targets = toc.map((section) => document.getElementById(section.id));

    targets.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toc]);

  const handleTocClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (!targetElement) {
      return;
    }
    const headerOffset = window.innerHeight * 0.08;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = window.scrollY + elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <div className='sticky top-[8vh]'>
      <div className='w-full top-0 self-start h-full overflow-y-scroll'>
        <div className='text-base font-bold tracking-wide mb-3'>目次</div>
        <ul>
          {toc.map(({ id, text }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={(e) => handleTocClick(e, id)}
            >
              <li
                className={`
                my-2 px-3 py-1
                ${focus === id ? 'rounded bg-white' : ''} 
              `}
                // 背景色を検討するbg-[#edeeee] ← Qiitaっぽい
              >
                {text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
