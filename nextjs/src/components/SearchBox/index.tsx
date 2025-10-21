export default function SearchBox() {
  return (
    <div className='border rounded-md p-4 hidden lg:block'>
      <div className='flex items-center border rounded-md overflow-hidden'>
        <input
          type='text'
          placeholder='キーワードで検索'
          className='flex-grow px-3 py-2 outline-none'
        />
        <button className='px-3 py-2 hover:bg-gray-100 transition'>🔍</button>
      </div>
    </div>
  );
}
