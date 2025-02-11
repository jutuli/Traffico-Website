function Button(props: { text: string }) {
  return (
    <button className="rounded-lg px-4 py-2 bg-red-500 text-white font-bold">
      {props.text}
    </button>
  );
}

export default Button;
