import Search from "./Search";

export default function Banner({ handleSubmit, loading, form }: any) {
  return (
    <div className="p-5 lg:p-15">
      <section className="section seo_banner">
        <div className="container mx-auto">
          <h1 className="text-center">SEO Optimizer</h1>
          <p>Discover what your real users are experiencing</p>
          <Search form={form} handleSubmit={handleSubmit} loading={loading} />
        </div>
      </section>
    </div>
  );
}
