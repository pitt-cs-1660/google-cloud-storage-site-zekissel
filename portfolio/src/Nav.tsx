interface NavProps { 
  curPage: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
}

function Nav({ curPage, setPage }: NavProps) {

  const active = { backgroundColor: '#677DB7', fontWeight: `bold` }
  const ABOUT = 0;
  const WORK = 1;
  const PROJECT = 2;

  return (
    <nav>
      <button onClick={() => setPage(ABOUT)} style={ curPage === ABOUT ? active : undefined }>About Me</button>
      <button onClick={() => setPage(WORK)} style={ curPage === WORK ? active : undefined }>Work and Education</button>
      <button onClick={() => setPage(PROJECT)} style={ curPage === PROJECT ? active : undefined }>Personal Projects</button>
    </nav>
  )
}

export default Nav