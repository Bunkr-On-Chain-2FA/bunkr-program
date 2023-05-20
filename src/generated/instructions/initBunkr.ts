/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { InitBunkrData, initBunkrDataBeet } from '../types/InitBunkrData'

/**
 * @category Instructions
 * @category InitBunkr
 * @category generated
 */
export type InitBunkrInstructionArgs = {
  initBunkrData: InitBunkrData
}
/**
 * @category Instructions
 * @category InitBunkr
 * @category generated
 */
export const initBunkrStruct = new beet.FixableBeetArgsStruct<
  InitBunkrInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['initBunkrData', initBunkrDataBeet],
  ],
  'InitBunkrInstructionArgs'
)
/**
 * Accounts required by the _initBunkr_ instruction
 *
 * @property [_writable_] bunkr
 * @property [_writable_, **signer**] authenticationWallet
 * @property [_writable_, **signer**] signer
 * @category Instructions
 * @category InitBunkr
 * @category generated
 */
export type InitBunkrInstructionAccounts = {
  bunkr: web3.PublicKey
  authenticationWallet: web3.PublicKey
  signer: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initBunkrInstructionDiscriminator = [
  166, 126, 171, 226, 222, 43, 232, 255,
]

/**
 * Creates a _InitBunkr_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitBunkr
 * @category generated
 */
export function createInitBunkrInstruction(
  accounts: InitBunkrInstructionAccounts,
  args: InitBunkrInstructionArgs,
  programId = new web3.PublicKey('BunKrGBXdGxyTLjvE44eQXDuKY7TyHZfPu9bj2Ugk5j2')
) {
  const [data] = initBunkrStruct.serialize({
    instructionDiscriminator: initBunkrInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.bunkr,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authenticationWallet,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
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
