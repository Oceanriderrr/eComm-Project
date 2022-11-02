import Link from "../Link/Link"

function Aside() {
    return (
      <aside className="Aside">
    <ul>
        <Link text="Products" />
        <Link text="Collections" />
        <Link text="Login" />
        <Link text="Logout" />
        <Link text="Swap Tokens" />
        <Link text="Checkout" />



    </ul>
      </aside>
    );
  }
  
  export default Aside;