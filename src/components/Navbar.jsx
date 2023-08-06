const Navbar = () => {
  console.log("Thanks for visting this page.");
  return (
    <div className="navbar">
      <span className="app-name">
        <p className="tracking-in-expand">TNEB bill calculator app</p>

        <a
          href="https://github.com/vickyvk326"
          target="_blank"
          rel="noreferrer"
          title="follow me on github"
        >
          <img
            className="roll-in-left"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            alt="github logo"
            height={30}
            width={30}
          />
          <span className="text-flicker-in-glow ">vickyvk326</span>
        </a>
      </span>
    </div>
  );
};

export default Navbar;
