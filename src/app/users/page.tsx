import { columns } from "@/components/users/columns";
import { DataTable } from "@/components/users/data-table";
import React from "react";

type Payment = {
  id: string;
  user: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "pmt_001",
      user: "Alice Johnson",
      amount: 124.5,
      status: "success",
      email: "alice.johnson@example.com",
    },
    {
      id: "pmt_002",
      user: "Bob Smith",
      amount: 89.99,
      status: "pending",
      email: "bob.smith@example.com",
    },
    {
      id: "pmt_003",
      user: "Charlie Brown",
      amount: 230.0,
      status: "failed",
      email: "charlie.brown@example.com",
    },
    {
      id: "pmt_004",
      user: "Diana Prince",
      amount: 59.75,
      status: "processing",
      email: "diana.prince@example.com",
    },
    {
      id: "pmt_005",
      user: "Ethan Hunt",
      amount: 415.2,
      status: "success",
      email: "ethan.hunt@example.com",
    },
    {
      id: "pmt_006",
      user: "Fiona Gallagher",
      amount: 92.3,
      status: "pending",
      email: "fiona.gallagher@example.com",
    },
    {
      id: "pmt_007",
      user: "George Miller",
      amount: 310.45,
      status: "success",
      email: "george.miller@example.com",
    },
    {
      id: "pmt_008",
      user: "Hannah Davis",
      amount: 120.0,
      status: "processing",
      email: "hannah.davis@example.com",
    },
    {
      id: "pmt_009",
      user: "Ian Curtis",
      amount: 77.7,
      status: "failed",
      email: "ian.curtis@example.com",
    },
    {
      id: "pmt_010",
      user: "Jasmine Lee",
      amount: 145.5,
      status: "success",
      email: "jasmine.lee@example.com",
    },
    {
      id: "pmt_011",
      user: "Kevin Wright",
      amount: 289.9,
      status: "processing",
      email: "kevin.wright@example.com",
    },
    {
      id: "pmt_012",
      user: "Laura Green",
      amount: 65.4,
      status: "pending",
      email: "laura.green@example.com",
    },
    {
      id: "pmt_013",
      user: "Mark Spencer",
      amount: 412.75,
      status: "success",
      email: "mark.spencer@example.com",
    },
    {
      id: "pmt_014",
      user: "Nina Brooks",
      amount: 155.0,
      status: "failed",
      email: "nina.brooks@example.com",
    },
    {
      id: "pmt_015",
      user: "Oscar Turner",
      amount: 210.25,
      status: "success",
      email: "oscar.turner@example.com",
    },
    {
      id: "pmt_016",
      user: "Paula Adams",
      amount: 87.0,
      status: "pending",
      email: "paula.adams@example.com",
    },
    {
      id: "pmt_017",
      user: "Quentin Ross",
      amount: 190.5,
      status: "processing",
      email: "quentin.ross@example.com",
    },
    {
      id: "pmt_018",
      user: "Rachel Kim",
      amount: 305.75,
      status: "success",
      email: "rachel.kim@example.com",
    },
    {
      id: "pmt_019",
      user: "Sam Carter",
      amount: 58.6,
      status: "failed",
      email: "sam.carter@example.com",
    },
    {
      id: "pmt_020",
      user: "Tina Evans",
      amount: 220.4,
      status: "success",
      email: "tina.evans@example.com",
    },
    {
      id: "pmt_021",
      user: "Umar Patel",
      amount: 178.2,
      status: "pending",
      email: "umar.patel@example.com",
    },
    {
      id: "pmt_022",
      user: "Vera Collins",
      amount: 399.99,
      status: "processing",
      email: "vera.collins@example.com",
    },
    {
      id: "pmt_023",
      user: "Will Harris",
      amount: 240.0,
      status: "success",
      email: "will.harris@example.com",
    },
    {
      id: "pmt_024",
      user: "Xavier Reed",
      amount: 175.75,
      status: "failed",
      email: "xavier.reed@example.com",
    },
    {
      id: "pmt_025",
      user: "Yara Scott",
      amount: 88.9,
      status: "pending",
      email: "yara.scott@example.com",
    },
    {
      id: "pmt_026",
      user: "Zane Mitchell",
      amount: 330.2,
      status: "success",
      email: "zane.mitchell@example.com",
    },
    {
      id: "pmt_027",
      user: "Abby Flores",
      amount: 410.1,
      status: "processing",
      email: "abby.flores@example.com",
    },
    {
      id: "pmt_028",
      user: "Brian Lopez",
      amount: 275.3,
      status: "success",
      email: "brian.lopez@example.com",
    },
    {
      id: "pmt_029",
      user: "Carmen Diaz",
      amount: 155.9,
      status: "failed",
      email: "carmen.diaz@example.com",
    },
    {
      id: "pmt_030",
      user: "Derek Walsh",
      amount: 205.5,
      status: "pending",
      email: "derek.walsh@example.com",
    },
    {
      id: "pmt_031",
      user: "Ella Fisher",
      amount: 98.0,
      status: "success",
      email: "ella.fisher@example.com",
    },
    {
      id: "pmt_032",
      user: "Frankie Lewis",
      amount: 260.6,
      status: "processing",
      email: "frankie.lewis@example.com",
    },
    {
      id: "pmt_033",
      user: "Grace Young",
      amount: 149.99,
      status: "pending",
      email: "grace.young@example.com",
    },
    {
      id: "pmt_034",
      user: "Henry Allen",
      amount: 310.8,
      status: "success",
      email: "henry.allen@example.com",
    },
    {
      id: "pmt_035",
      user: "Isla Moore",
      amount: 275.0,
      status: "failed",
      email: "isla.moore@example.com",
    },
  ];
}
const page = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-5">
      <h3 className="px-4 text-xl font-semibold bg-muted-foreground/50 p-1 rounded">
        All Payments
      </h3>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
