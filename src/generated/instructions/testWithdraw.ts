/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  AuthenticationObject,
  authenticationObjectBeet,
} from '../types/AuthenticationObject'

/**
 * @category Instructions
 * @category TestWithdraw
 * @category generated
 */
export type TestWithdrawInstructionArgs = {
  authenticationObject: AuthenticationObject
}
/**
 * @category Instructions
 * @category TestWithdraw
 * @category generated
 */
export const testWithdrawStruct = new beet.FixableBeetArgsStruct<
  TestWithdrawInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['authenticationObject', authenticationObjectBeet],
  ],
  'TestWithdrawInstructionArgs'
)
/**
 * Accounts required by the _testWithdraw_ instruction
 *
 * @property [_writable_] bunkr
 * @property [_writable_, **signer**] signer
 * @category Instructions
 * @category TestWithdraw
 * @category generated
 */
export type TestWithdrawInstructionAccounts = {
  bunkr: web3.PublicKey
  signer: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const testWithdrawInstructionDiscriminator = [
  30, 66, 120, 223, 160, 84, 209, 143,
]

/**
 * Creates a _TestWithdraw_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category TestWithdraw
 * @category generated
 */
export function createTestWithdrawInstruction(
  accounts: TestWithdrawInstructionAccounts,
  args: TestWithdrawInstructionArgs,
  programId = new web3.PublicKey('BunKrGBXdGxyTLjvE44eQXDuKY7TyHZfPu9bj2Ugk5j2')
) {
  const [data] = testWithdrawStruct.serialize({
    instructionDiscriminator: testWithdrawInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.bunkr,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
