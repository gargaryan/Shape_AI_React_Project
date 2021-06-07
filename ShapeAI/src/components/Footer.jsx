import "../styles.css";
export default function Footer() {
  const date = new Date();
  const curryr = date.getFullYear();
  return (
    <footer>
      <p>Copyright @{curryr} </p>
    </footer>
  );
}
