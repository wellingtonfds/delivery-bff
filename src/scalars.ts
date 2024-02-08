import { GraphQLScalarType } from 'graphql/type'
import { Kind } from 'graphql/language'

export const BigIntScalar = new GraphQLScalarType({
  name: 'BigInt',
  description: 'BigInt custom scalar type',
  parseValue(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid bigint')
    }

    return BigInt(value)
  },
  serialize(value) {
    return value.toString()
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return BigInt(ast.value)
    }

    throw new Error('Invalid bigint')
  },
})
