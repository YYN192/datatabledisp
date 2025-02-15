import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Beautiful Dam</h1>
      <p>Amazing view of the dam!</p>
      <Image 
        src="/my-image.png" 
        alt="My Image" 
        width={600} 
        height={400} 
        style={{ borderRadius: "10px" }} 
      />
    </div>
  );
}
