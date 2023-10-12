import Title from "./Title";
import { tours } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title first="featured" second="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article className="tour-card" key = {tour.id}>
              <div className="tour-img-container">
                <img src={tour.img} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.content}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    china
                  </p>
                  <p>{`${tour.duration} days`}</p>
                  <p>{`from $${tour.priceInDollar}`}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
