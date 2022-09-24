import yayJpg from "../assets/yay.jpg";
import { connect } from "umi";

function HomePage(props) {
  console.log(props);
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}

export default connect((state) => {
  return state;
})(HomePage);
