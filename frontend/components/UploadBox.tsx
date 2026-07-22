export default function UploadBox() {
  return (
    <div className="border-2 border-dashed rounded-lg p-10 text-center">

      <h2>Upload Files</h2>

      <p>
        PDF, DOCX, GitHub Repository ZIP,
        Architecture Diagram
      </p>

      <input type="file" />

    </div>
  );
}