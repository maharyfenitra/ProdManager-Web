"use client";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  useGetAllCategories,
  CategoryType,
} from "@/lib/api/queries/products/useGetAllCategories";
import { Table } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { CategorySearchForm } from "./components/CategorySearchForm";
const Page = () => {
  const { data, isLoading } = useGetAllCategories();
  const { push } = useRouter();

  useEffect(() => {
    console.log(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      <CategorySearchForm/>
      {data && (
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((category: CategoryType, index: number) => {
              console.log(index);
              return (
                <Table.Row key={index}>
                  <Table.Cell>{category.name}</Table.Cell>
                  <Table.Cell>{category.description}</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Button onClick={() => push(`categories/details/${category.id}`)}>Détails</Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      )}
    </>
  );
};

export default Page;
