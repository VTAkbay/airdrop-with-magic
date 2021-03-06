import { getSession } from '../../utils/iron';

export default async function user(req, res) {
  const session = await getSession(req);
  res.status(200).json({ user: session || null });
}