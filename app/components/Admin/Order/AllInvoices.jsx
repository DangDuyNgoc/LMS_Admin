import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useGetOrdersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { format } from "timeago.js";
import Loader from "../../Loader/Loader";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";

const AllInvoices = ({ isDashboard }) => {
  const { theme, setTheme } = useTheme();
  const { data, isLoading } = useGetOrdersAnalyticsQuery();
  const { data: usersData } = useGetAllUsersQuery();
  const { data: coursesData } = useGetAllCoursesQuery();

  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    if (data) {
      const temp = data.orders.map((item) => {
        const user = usersData?.users.find((user) => user._id === item.userId);
        const course = coursesData?.courses.find(
          (course) => course._id === item.courseId
        );

        return {
          ...item,
          userName: user?.name,
          userEmail: user?.email,
          title: course?.name,
          price: "$" + course.price,
        };
      });
      setOrderData(temp);
    }
  }, [data, usersData, coursesData]);

  const rows = [];

  orderData &&
    orderData.forEach((item) => {
      rows.push({
        id: item._id,
        userName: item.userName,
        userEmail: item.userEmail,
        title: item.title,
        price: item.price,
        created_at: format(item.createdAt),
      });
    });

  return (
    <div className={!isDashboard ? "mt-[120px]" : "mt-[0px]"}>
      {
        isLoading ? (
            <Loader />
        ) : (
            <Box m={isDashboard ? "0" : "40px"}>
          <Box
            m={isDashboard ? "0" : "40px 0 0 0"}
            height={isDashboard ? "35vh" : "90vh"}
            overflow={"hidden"}
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #ffffff30!important"
                    : "1px solid #ccc!important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none!important",
              },
              "& .name-column--cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                borderBottom: "none",
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
              },
              "& .MuiDataGrid-footerContainer": {
                color: theme === "dark" ? "#fff" : "#000",
                borderTop: "none",
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
              },
              "& .MuiCheckbox-root": {
                color:
                  theme === "dark" ? `#b7ebde !important` : `#000 !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `#fff !important`,
              },

            }}
          >
            <DataGrid
              checkboxSelection={isDashboard ? false : true}
              rows={rows}
              columns={columns}
              components={isDashboard ? {} : { Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
        )
      }
    </div>
  );
};

export default AllInvoices;
