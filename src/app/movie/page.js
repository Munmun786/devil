import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const movie = async () => {

await new Promise(resolve => setTimeout(resolve, 1000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8b1f344bc0mshfe3558ed5ceadc0p108079jsnf089d724a579",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;
