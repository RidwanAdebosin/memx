import UserDetails from "./UserDetails";
import UserHero from "./UserHero";
import Navigation from "./UserNavigation";

const ProfileMainContentSection = () => {
  return (
    <section className="pt-28 flex flex-col justify-center items-center">
      <Navigation />
      <UserHero />
      <UserDetails />
    </section>
  );
};

export default ProfileMainContentSection;
