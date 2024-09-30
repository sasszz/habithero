// GraphQL Resolvers
const resolvers = {
  Query: {
    players: async (parent, args, context) => {
      return context.prisma.player.findMany();
    },
  },
  Mutation: {
    createPlayer: (parent, args, context) => {
      const { email, validated, refCode } = args;
      const newPlayer = context.prisma.player.create({
        data: {
          email,
          validated,
          refCode,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      return newPlayer;
    },
  },
};

module.exports = resolvers;
