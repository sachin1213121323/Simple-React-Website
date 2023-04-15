import Navbar from "./Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Info = () => {
  return (
    <>
      <Navbar />
      <div className=" h-5/6 bg-gradient-to-r from-purple-500 to-pink-500 pb-28">
        <div className="py-10 px-52 flex flex-row gap-9">
          <img
            src="https://nationaltoday.com/wp-content/uploads/2022/10/6-Shah-Rukh-Khan-640x514.jpg"
            className="h-32 w-32 rounded-full"
          ></img>
          <div>
            <h1 className=" text-4xl">
              Shah Rukh Khan
              <span className=" text-xl"> (Actor,producer)</span>
            </h1>
            <h2 className=" font-bold pt-6 flex gap-2">
              Born:
              <span className=" font-normal">
                2 November 1965 (age 57 years),
              </span>
            </h2>
            <h2 className=" font-bold pt-2 flex gap-2">
              Nationality:
              <span className=" font-normal">India</span>
            </h2>

            <p className=" pt-6 w-2/4">
              Shah Rukh Khan, also known by the initialism SRK, is an Indian
              actor and film producer who works in Hindi films. Referred to in
              the media as the "Baadshah of Bollywood" and "King Khan", he has
              appeared in more than 90 films, and earned numerous accolades,
              including 14 Filmfare Awards.
            </p>

            <div className=" pt-9 text-2xl flex gap-5">
              <FaFacebookSquare color="#3b5998" />
              <AiFillInstagram color="#962fbf" />
              <AiOutlineTwitter color="#00acee" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 shadow-xl rounded-lg bg-white -mt-20 m-auto">
        <div className=" p-9 ">
          <h1 className=" text-2xl font-bold pb-3">History</h1>
          <h2 className=" font-bold pb-4">
            SRK" redirects here. For other uses, see SRK (disambiguation).
          </h2>
          <p>
            Shah Rukh Khan (pronounced [ˈʃɑːɦɾʊx xɑːn]; born 2 November 1965),
            also known by the initialism SRK, is an Indian actor and film
            producer who works in Hindi films. Referred to in the media as the
            "Baadshah of Bollywood" and "King Khan", he has appeared in more
            than 90 films, and earned numerous accolades, including 14 Filmfare
            Awards. He has been awarded the Padma Shri by the Government of
            India, as well as the Ordre des Arts et des Lettres and Legion of
            Honour by the Government of France. Khan has a significant following
            in Asia and the Indian diaspora worldwide. In terms of audience size
            and income, he has been described as one of the most successful film
            stars in the world. Many of his films thematise Indian national
            identity and connections with diaspora communities, or gender,
            racial, social and religious differences and grievances.
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
