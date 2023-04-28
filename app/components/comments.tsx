/**
 * Main commentbox, done with commentbox.io
 */
function CommentBox({ projectId }: { projectId: string | undefined }) {
  if (!projectId) {
    return <></>;
  }

  return (
    <div>
      <div className="commentbox"></div>
      <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
      <script>{`commentBox('${projectId}')`}</script>
    </div>
  );
}

export { CommentBox };
