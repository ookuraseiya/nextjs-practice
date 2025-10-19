import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      {/* レスポンシブする */}
      <div className='flex flex-col items-center justify-center text-center py-6'>
        <Link
          href='/privacy-policy'
          className='font-semibold text-gray-800 hover:text-gray-600 transition'
        >
          Privacy policy
        </Link>
        <p className='text-sm text-gray-800 mt-2 font-semibold'>
          © 2025 Seiya&apos;s tech blog
        </p>
      </div>
    </footer>
  );
};
export default Footer;
