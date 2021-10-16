export default function Location() {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5378600973922!2d106.64921971524579!3d10.770055562255205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f17c3066add%3A0x9280efd0ef377d7!2zxJBp4buDbSBUw6JtIFPDuiBLeQ!5e0!3m2!1sen!2s!4v1634350743508!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe>'

  return (
    <>
      <div className="text-center mt-16">
        <h1 className="text-6xl font-mono">Địa chỉ</h1>
        <h2 className="text-logo text-2xl mt-1 mb-4">
          <span className="font-serif text-3xl">ĐIỂM TÂM SÚ KY</span>
          <br />
          <span className="font-bold">58/1A Âu Cơ</span>
          <br />
          <span>Phường 9 Quận Tân Bình</span>
        </h2>
        <div
          className="shadow-2xl"
          dangerouslySetInnerHTML={{ __html: iframe }}
        ></div>
      </div>
    </>
  )
}
