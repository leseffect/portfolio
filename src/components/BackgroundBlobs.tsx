const BLOB_COUNT = 4;

/** 배경에 천천히 떠다니는 장식용 색 덩어리 */
export function BackgroundBlobs() {
  return (
    <div className="blobs" aria-hidden="true">
      {Array.from({ length: BLOB_COUNT }, (_, index) => (
        <span key={index} className={`blob blob--${index + 1}`} />
      ))}
    </div>
  );
}
