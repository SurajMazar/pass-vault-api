import BaseSeeder from './BaseSeeder';
import * as bcrypt from 'bcrypt';

class UserSeeder extends BaseSeeder {
  async handler() {
    const role = await this.prisma.roles.findFirstOrThrow({
      where: {
        name: 'super_admin',
      },
    });

    await this.prisma.users.upsert({
      create: {
        first_name: 'Admin',
        last_name: 'Admin',
        full_name: 'Admin',
        email: 'admin@admin.com',
        username: 'admin',
        password: await bcrypt.hash('@secret@', 10),
        roles: {
          create: [{ role: { connect: { id: role?.id } } }],
        },
      },
      update: {},
      where: { email: 'admin@admin.com', username: 'admin' },
    });
  }
}

export default UserSeeder;
