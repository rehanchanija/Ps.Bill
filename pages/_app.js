import Navbar from "../components/Navbar";
    import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  return (
    <div>

      <Navbar />
      <Component {...pageProps} />
      <Layout/>
      

      {/* <Footer />
      <ToastContainer /> */}

    </div>
  );
}

export default MyApp;
