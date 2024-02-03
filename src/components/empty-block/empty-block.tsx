type Props = {
  title: string;
  content?: string;
  type?: "error" | "default";
};

export const EmptyBlock = ({ title, content, type = "default" }: Props) => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "80vh" }}
  >
    <div className="text-center">
      {type === "default" && (
        <i className="fas fa-search fa-3x mb-3 text-muted"></i>
      )}
      {type === "error" && (
        <i className="fas fa-exclamation-triangle fa-3x mb-3 text-danger"></i>
      )}
      <h4 className={type === "error" ? "text-danger" : ""}>{title}</h4>
      {content && (
        <p className={type === "error" ? "text-danger" : ""}>{content}</p>
      )}
    </div>
  </div>
);
