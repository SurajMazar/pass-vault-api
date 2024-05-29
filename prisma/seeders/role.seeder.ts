import BaseSeeder from './BaseSeeder';

class RoleSeeder extends BaseSeeder {
  async handler() {
    await this.prisma.roles.upsert({
      create: {
        name: 'super_admin',
        display_name: 'Super admin',
      },
      update: {},
      where: { name: 'super_admin' },
    });
  }
}

export default RoleSeeder;
