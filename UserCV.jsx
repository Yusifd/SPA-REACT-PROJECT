import Contacts from "./Contacts";
import Expierence from "./Expierence";
import PersonalInfo from "./PersonalInfo";
export default function UserCV(){
    return (
        <>
        <div>
          <h1>User CV</h1>
          <PersonalInfo />
          <Expierence/>
          <Contacts />
        </div>
        </>
      );
}