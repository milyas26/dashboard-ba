import { Formik, Form } from "formik";
import * as Yup from "yup";
import { DatePicker, DateRangePicker, Input, MultiSelect, SingleSelect } from "../../../../components";
import { DashboardLayout } from "../../../../components";
import { useNavigate } from "react-router-dom";

interface CreateProps {
  username: string;
  email: string;
  date: Date;
  date_range: any;
  single_color: any;
  multi_color: any;
}

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export default function Submenu1Create() {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Username wajib diisi"),
    email: Yup.string()
      .email("Masukkan email yang valid")
      .required("Email wajib diisi"),
    date: Yup.date().required("Tanggal wajib diisi"),
    date_range: Yup.array().required("Masukkan range tanggal"),
    single_color: Yup.object().required("Warna wajib diisi"),
    multi_color: Yup.array().required("Wajib isi beberapa warna"),
  });

  const submitCreate = (values: CreateProps) => {
    const { username, email, date, single_color, date_range, multi_color } = values;
  };

  const colourOptions: readonly ColourOption[] = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  return (
    <main>
      <DashboardLayout>
        <div className="page-content">
          {/* <!-- Page Breadcrumb --> */}
          <div className="page-breadcrumbs">
            <ul className="breadcrumb">
              <li>
                <i className="fa fa-home"></i>
                <a onClick={() => navigate("/dashboard")}>Home</a>
              </li>
              <li>
                <a onClick={() => navigate("/dashboard/nama-menu/submenu-1")}>
                  Submenu 1
                </a>
              </li>
              <li className="active">Tambah</li>
            </ul>
          </div>

          <Formik
            initialValues={{
              username: "",
              email: "",
              date: new Date(),
              date_range: null,
              single_color: null,
              multi_color: null,
            }}
            validationSchema={loginSchema}
            onSubmit={(values: CreateProps) => {
              submitCreate(values);
            }}
          >
            {({ errors, touched, values, setFieldValue }) => {
              return (
                <Form>
                  <div className="page-body w-100">
                    <div className="widget flat radius-bordered">
                      <div className="widget-header bg-blue">
                        <span className="widget-caption">
                          TAMBAH DATA PENGGUNA
                        </span>
                      </div>
                      <div className="widget-body">
                        <div id="registration-form">
                          <div className="form-title">User Information</div>
                          <div className="form-group">
                            <Input
                              name="username"
                              placeholder="Username"
                              value={values.username}
                              isError={Boolean(
                                errors.username && touched.username
                              )}
                              errorMessage={errors.username}
                            />
                          </div>
                          <div className="form-group">
                            <Input
                              name="email"
                              placeholder="Email"
                              value={values.email}
                              isError={Boolean(errors.email && touched.email)}
                              errorMessage={errors.email}
                            />
                          </div>
                          <div className="form-group">
                            <SingleSelect
                              isDisabled={false}
                              isLoading={false}
                              isClearable={true}
                              isRtl={false}
                              isSearchable={true}
                              name="color"
                              options={colourOptions}
                              value={values.single_color}
                              onChange={(value: any) => {
                                setFieldValue("single_color", value);
                              }}
                              placeholder="Pilih Warna ..."
                              isError={Boolean(errors.single_color && touched.single_color)}
                              errorMessage={errors.single_color}
                            />

                          </div>
                          <div className="form-group">
                            <MultiSelect
                              name="colors"
                              options={colourOptions}
                              value={values.multi_color}
                              onChange={(value: any) => {
                                setFieldValue("multi_color", value);
                              }}
                              placeholder="Pilih Beberapa Warna ..."
                              isError={Boolean(errors.multi_color && touched.multi_color)}
                              errorMessage={errors.multi_color}
                            />
                          </div>
                          <div className="form-group">
                            <DatePicker
                              placeholder="Pilih tanggal"
                              value={values.date}
                              onChange={(value: any) =>
                                setFieldValue("date", value)
                              }
                              isError={Boolean(errors.date && touched.date)}
                              errorMessage={errors.date}
                            />
                          </div>
                          <div className="form-group">
                            <DateRangePicker
                              value={values.date_range}
                              className="w-full"
                              onChange={(range: any) =>
                                setFieldValue("date_range", range)
                              }
                              isError={Boolean(errors.date_range && touched.date_range)}
                              errorMessage={errors.date_range}
                            />
                          </div>
                          <button type="submit" className="btn btn-blue">
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </DashboardLayout>
    </main>
  );
}
