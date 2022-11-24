import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import movieAPI from "Services/movieAPI";

// data: tenPhim, biDanh, trailer, hinhAnh, moTa, ngayKhoiChieu
interface MovieValues {
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: FileList;
  moTa: string;
  // chú ý ngayKhoiChieu phải đúng định dạng dd/mm/yyyy
  ngayKhoiChieu: string;
}

const AddMovie = () => {
  const { register, handleSubmit } = useForm<MovieValues>({
    mode: "onTouched",
  });

  const onSubmit = async (values: MovieValues) => {
    const payload = {
      ...values,
      hinhAnh: values.hinhAnh[0],
      ngayKhoiChieu: dayjs(values.ngayKhoiChieu).format("DD/MM/YYYY"),
    };
    try {
      await movieAPI.addMovie(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add Movie</h1>
      <div>
        <input type="text" placeholder="Tên Phim" {...register("tenPhim")} />
      </div>
      <div>
        <input type="text" placeholder="Bí Danh" {...register("biDanh")} />
      </div>
      <div>
        <input type="text" placeholder="Mô Tả" {...register("moTa")} />
      </div>
      <div>
        <input type="text" placeholder="Trailer" {...register("trailer")} />
      </div>
      <div>
        <input type="file" {...register("hinhAnh")} />
      </div>
      <div>
        <input
          type="date"
          placeholder="Ngày Khởi Chiếu"
          {...register("ngayKhoiChieu")}
        />
      </div>
      <button>Thêm Phim</button>
    </form>
  );
};

export default AddMovie;
