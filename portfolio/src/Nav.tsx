interface NavProps { setPage: React.Dispatch<React.SetStateAction<number>> }

function Nav({ setPage }: NavProps) {



    return (
      <nav>
        <button onClick={() => setPage(0)}>About Me</button>
        <button onClick={() => setPage(1)}>Work and Education</button>
        <button onClick={() => setPage(2)}>Personal Projects</button>
      </nav>
    )
  }
  
  export default Nav