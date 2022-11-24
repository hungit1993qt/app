import styles from "./demo.module.scss";

type Props = {};

const Demo = (props: Props) => {
  return (
    <div>
      {/* <h1 className={cn(styles.title, "text-center ")}>Hello Cybersoft</h1> */}
      <h1 className={styles.title}>Hello Cybersoft</h1>

      {/* <h1
        className={cn({
          [styles.active]: props.active,
          [styles.inactive]: !props.active,
        })}
      >
        Demo
      </h1> */}
    </div>
  );
};

export default Demo;
