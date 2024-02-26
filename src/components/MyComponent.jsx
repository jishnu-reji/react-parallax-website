import React from "react";
import image1 from "../images/munnar1.png"
import image2 from "../images/ress.png"
import image3 from "../images/tree.png"
import MainBody from "./MainBody";
import Header from "./Header"
import Footer from "./Footer"
import Slide from "./Slide";
import Comp1 from "./Comp1";

function MyComponent() {
  return (
    <div className="wrapper">
      <Header/>
      <div className=" header">
        <img src={image1} className="background1"/>
        <div><img src={image2} className="background2"/></div>
        <img src={image3} className="background3"/>
        <h1 className="title">MUNNAR THE BEAUTY</h1>
      </div>
      <section>
            <div className="container w-15">
                <div className="co">
                    <h5 className="text-center  pt-5">WELCOME TO</h5>
                    <h2 className="text-center head1">ROYAL PALACE</h2>
                    <h5 className="text-center pb-4">RESORT & HOTEL</h5>
                    
                    <div className="para container pb-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio neque dolore? Delectus debitis voluptate sunt sint excepturi sed accusantium praesentium oempora veniam ullam, totam asperiores velit sunt modi qui, consequuntur ducimus quam? Consectetur sunt architecto dolorem alias fugit magni tenetur debitis suscipit impedit. Dolores architecto nostrum sunt qui, adipisci aspernatur porro veritatis saepe dicta aperiam ea expedita minus. Repellendus, unde, reiciendis repellat laudantium rem odit neque vitae a, voluptates labore nihil! Dolor earum blanditiis dignissimos unde saepe maxime nobis accusamus! Illum eveniet vitae corrupti quo ratione sit nobis beatae esse. Nulla reiciendis repellat itaque vel a, in aperiam pariatur, numquam quo, autem sit corporis omnis impedit aliquam qui consequatur quasi laudantium suscipit! Asperiores cumque iusto iste, consequatur ut quae harum ratione molestias voluptatibus quaerat nisi blanditiis at aperiam laborum maiores accusantium impedit sapiente! Rerum accusantium explicabo commodi nam non. Cum, nihil aut? Culpa repellendus dolorum aliquam reprehenderit. Totam dolore nisi sint sit, illo quisquam? Ipsam deleniti impedit cupiditate! Ut architecto sequi maiores minima illo cupiditate eius pariatur, voluptatem atque velit perferendis rem odit consequuntur cumque error voluptate voluptatibus dolor ab officia omnis eaque totam mollitia? Harum odio, ducimus officia vel saepe, perferendis dignissimos animi eligendi soluta autem blanditiis delectus omnis aut nesciunt fuga? Delectus, quasi eum veritatis dicta saepe laudantium! Quis quos dolorum delectus quod ipsum in facilis inventore eaque, veniam cum. Omnis, non. Vel eaque sed, illum deserunt adipisci ab est sapiente porro dolor debitis quibusdam velit blanditiis doloremque dignissimos modi architecto ut dolore consectetur mollitia, error ad aliquam, possimus rerum quas. Facilis eos tempora, rem nesciunt labore minima officia distinctio porro deserunt est similique earum sunt necessitatibus quos, expedita perspiciatis! Rerum, fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quos doloribus tempore, voluptatibus veritatis qui cum eius nobis temporibus quam amet recusandae iure obcaecati cupiditate officia quaerat minima aperiam ad!
                        Illo fugiat eligendi ipsum dolor voluptatem ratione. Eligendi architecto magni fuga blanditiis esse rem amet consequuntur cupiditate minima, quibusdam vero ipsum explicabo reprehenderit, perspiciatis ut, repellendus delectus dignissimos corporis neque.
                        A nobis tempora suscipit mollitia perspiciatis dolorem minus id ipsam consequatur voluptatum neque dolor voluptate, fugiat modi quaerat, atque harum incidunt eveniet iure ab. Asperiores qui molestiae vel harum pariatur.
                        Quis eius magni modi eum qui. Repellat, veritatis voluptas! Fugit ipsum porro debitis repellendus dignissimos sunt placeat, aut officiis illum illo eius dicta asperiores ullam culpa optio explicabo tempora repudiandae!
                        Optio ipsum debitis sit. Eos magnam, similique amet quod perferendis quidem quisquam repellat dolorum vel quis error illo, nam magni rerum nisi cum. Eveniet eius at explicabo magnam veritatis sunt.
                        Laborum eos odio deserunt velit culpa voluptatem nisi perspiciatis temporibus quam repellat nemo quod, alias doloremque eum sint voluptates magnam ue corporis adipisci porro, repellendus quidem.</p>
                    </div>
                </div>
            </div>
      </section>
      <MainBody/>
      <Slide/>
      <Comp1/>
      <Footer/>
    </div>
  );
} 

export default MyComponent;
