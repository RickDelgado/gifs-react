interface CustomHeaderProps {
  titulo: string;
  descripcion: string;
}

const CustomHEader = ({ titulo, descripcion }: CustomHeaderProps) => {
  return (
    <div className="content-center">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
};

export default CustomHEader;
