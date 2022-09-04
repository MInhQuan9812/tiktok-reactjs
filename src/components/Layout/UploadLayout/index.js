import UploadHeader from "./UploadHeader";

function UploadLayout({ children }) {
  return (
    <div>
      <UploadHeader />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default UploadLayout;
