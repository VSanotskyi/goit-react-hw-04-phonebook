export default function SearchContact({ setNameForSearch }) {

  return (
    <input
      type="text"
      onChange={({ target: { value } }) => setNameForSearch(value)}
    />
  );
}
