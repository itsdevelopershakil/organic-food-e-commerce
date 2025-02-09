const SubcriptionForm = () => {
  return (
    <div className="flex bg-white rounded-[43px] border border-[#e6e6e6] grow">
      <input
        type="text"
        className="h-full outline-none bg-transparent px-5 w-[calc(100%_-_100px)] sm:w-auto sm:grow text-sm py-3 sm:py-[14px] shrink"
        placeholder="Your email address"
      />
      <button
        type="button"
        className="h-full shrink-0 rounded-[43px] bg-primary text-white text-sm px-5 sm:px-10 cursor-pointer py-3 sm:py-[14px] border border-primary"
      >
        Subscribe
      </button>
    </div>
  );
};

export default SubcriptionForm;
