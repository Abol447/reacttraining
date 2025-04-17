export default function Error({ info }) {
  console.log(1);
  return (
    <>
      {" "}
      {info.name == "" ? (
        <div className="text-red-700"> enter name field</div>
      ) : info.id == "" ? (
        <div className="text-red-700"> enter id field</div>
      ) : null}
    </>
  );
}
