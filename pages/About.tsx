import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" my-11 mx-20 flex flex-col gap-14">
        <h1 className=" text-center text-4xl uppercase font-bold text-red-400">
          Some disease
        </h1>
        {Card({
          img: "https://www.sonambekarhospital.com/wp-content/uploads/2021/08/Lung-Disease.jpg",
          disease: "Idiopathic disease",
          name: "Rahul singh",
        })}
        {Card({
          img: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/17665-hashimotos-disease",
          disease: "neck pain",
          name: "Rohan",
        })}
        {Card({
          img: "https://www.metropolisindia.com/blog/wp-content/uploads/2023/04/ezgif.com-gif-maker-28.jpg",
          disease: "scabies itching",
          name: "jassi",
        })}
        {Card({
          img: "https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/324/2022/07/iStock-1272207619-1-768x512.jpg",
          disease: "knee pain",
          name: "jack",
        })}
        {Card({
          img: "https://beta.mountelizabeth.com.sg/images/default-source/default-album/common-illnesses-caught-school-main-t.jpg?sfvrsn=15c4801e_4",
          disease: "cough and cold",
          name: "Vicky malhotra",
        })}
      </div>
    </>
  );
};

const Card = (props: any) => {
  return (
    <>
      <div className=" shadow-lg rounded-2xl">
        <div className=" flex gap-2">
          <img src={props.img} className="rounded-l-2xl" width={700}></img>
          <div className=" py-8 px-10 flex flex-col gap-5">
            <h1 className=" text-4xl font-bold text-red-400">
              {props.disease}
            </h1>
            <h1 className=" font-bold">
              An idiopathic disease has an unknown cause or source. As medical
              science has advanced, many diseases with entirely unknown causes
              have had some aspects of their sources explained and therefore
              shed their idiopathic status. For example, when germs were
              discovered, it became known that they were a cause of infection,
              but particular germs and diseases had not been linked. In another
              example, it is known that autoimmunity is the cause of some forms
              of diabetes mellitus type 1, even though the particular molecular
              pathways by which it works are not yet understood. It is also
              common to know certain factors are associated with certain
              diseases; however, association and causality are two very
              different phenomena, as a third cause might be producing the
              disease, as well as an associated phenomenon.
            </h1>

            <h1 className=" font-bold text-2xl text-red-400">{props.name}</h1>
            <h2 className=" text-gray-400">23 march 2023</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
