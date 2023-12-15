export default function ContactItem({ contact, deleteContact }) {
  const { name, number, id } = contact;

  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button"
              onClick={() => deleteContact(id)}
      >Delete
      </button>
    </li>
  );
}
