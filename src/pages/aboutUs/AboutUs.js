import Title from "../../components/title/Title";
import SubTitle from "../../components/subTitle/SubTitle";

const AboutUs = (props) => {
  return(
    <>
      <Title text={props.text.title}/>
      <SubTitle text={props.text.subtitle}/>
    </>
  )
}

export default AboutUs;