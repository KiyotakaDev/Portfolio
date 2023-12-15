import "ldrs/bouncy";

const PrincipalLoader = () => {
  return (
    <div
      style={{ height: "100dvh" }}
      className="w-full flex justify-center items-center bg-leveled-950"
    >
      <l-bouncy size="250" speed="1.75" color="white" />
    </div>
  );
};

export default PrincipalLoader;
