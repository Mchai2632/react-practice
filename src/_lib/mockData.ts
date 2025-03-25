import { faker } from "@faker-js/faker";

export type StatusType = "working" | "vacation";

const status: StatusType[] = [
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "working",
  "vacation",
];

export function mockUsers(count: number) {
  const data = Array.from({ length: count }, (_, index) => {
    const random = Math.floor(Math.random() * status.length);
    return {
      id: index + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 60 }),
      address: faker.location.streetAddress({ useFullAddress: true }),
      status: status[random],
    };
  });
  console.log(data);

  return data;
}
