"use client";

export default function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Curriculum.pdf";
    link.download = "Curriculum.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      className="border border-white py-2 px-4 rounded"
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
}
