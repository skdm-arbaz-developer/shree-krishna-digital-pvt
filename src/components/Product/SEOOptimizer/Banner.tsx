import Search from "./Search";

export default function Banner({ handleSubmit, loading }: any) {
  return (
    <div className="p-15">
      <section className="section seo_banner">
        <div className="container mx-auto">
          <h1>SEO Optimizer</h1>
          <p>Discover what your real users are experiencing</p>
          <Search handleSubmit={handleSubmit} loading={loading} />
        </div>
      </section>
    </div>
  );
}
