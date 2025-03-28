"use client";
import { Table, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useGetAllProducts, ProductType } from "@/lib/api/";
import { ProductSearchForm } from "./components/ProductSearchForm";

const Page = () => {
  const { data } = useGetAllProducts();
  const router = useRouter();

  return (
    <div>
      <ProductSearchForm/>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Nom</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data && data.length > 0 ? (
            data.map((product: ProductType) => (
              <Table.Row key={product.id}>
                <Table.Cell>{product.id}</Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell textAlign="end">
                  <Button
                    colorScheme="blue"
                    onClick={() => router.push(`products/${product.id}`)}
                    mr={2}
                  >
                    Voir
                  </Button>
                  <Button
                    colorScheme="green"
                    onClick={() => router.push(`products/${product.id}/edit`)}
                    mr={2}
                  >
                    Editer
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => console.log("Supprimer le produit")}
                    mr={2}
                  >
                    Supprimer
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={4} textAlign="center">
                Aucun produit disponible.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default Page;
