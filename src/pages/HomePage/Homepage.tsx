
import Button from "../../components/Button/Button";

function HomePage() {
    const done = [1, 2, 3]
    return ( 
    <>
    
        <title>Home Page</title>
    
    <nav className="text-main-light flex justify-center align-middle py-2">
        <div>There is you can review all Norkin Dmitriy's assignments</div>
    </nav>

     <div className="flex justify-center border-t-4 border-accent-dark pt-7 gap-4">
        {done.map((id) => (
          <Button key={id} id={id} className="border-2">
            Assignment {id}
          </Button>
        ))}
      </div>

    </>

     );
}

export default HomePage;