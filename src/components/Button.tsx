function Button(props: { text: string; icon?: string }) {
  return (
    <button className="rounded-lg px-10 py-4 bg-[#F06352] z-1 text-white font-bold flex gap-4 justify-center items-center">
      {props.text}{' '}
      {props.icon && <img src={props.icon} alt="icon" className="w-6 h-6" />}
    </button>
  );
}

export default Button;
