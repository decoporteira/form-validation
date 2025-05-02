export default function Label({ text, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {text} 
    </label>
  )
}