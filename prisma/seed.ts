import RoleSeeder from './seeders/role.seeder';
import UserSeeder from './seeders/user.seeder';

async function main() {
  await new RoleSeeder().seed();
  await new UserSeeder().seed();
}

main().then(() => {
  console.log('Database seed completed');
});
