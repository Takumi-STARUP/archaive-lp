'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, Calendar, Building, Users, Target, MessageSquare, AlertCircle } from 'lucide-react';

interface Lead {
  id: string;
  companyName: string;
  name: string;
  department?: string;
  position?: string;
  email: string;
  phone: string;
  employeeCount: string;
  purpose: string;
  message?: string;
  status: string;
  priority: string;
  assignedTo?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  contactedAt?: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        sortBy,
        sortOrder,
        ...(statusFilter && { status: statusFilter }),
      });

      const response = await fetch(`/api/leads?${params}`);
      if (!response.ok) throw new Error('データの取得に失敗しました');

      const data = await response.json();
      setLeads(data.data);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [pagination.page, statusFilter, sortBy, sortOrder]);

  const updateLeadStatus = async (id: string, status: string) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status, contactedAt: status === 'contacted' ? new Date() : undefined }),
      });

      if (!response.ok) throw new Error('更新に失敗しました');

      await fetchLeads();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'エラーが発生しました');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'converted': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'normal': return 'bg-gray-100 text-gray-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">読み込み中...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md">
        <div className="flex items-center">
          <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
          <p className="text-red-800">{error}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">リード管理</h1>
              <div className="flex gap-4">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">全てのステータス</option>
                  <option value="new">新規</option>
                  <option value="contacted">連絡済み</option>
                  <option value="qualified">見込みあり</option>
                  <option value="converted">成約</option>
                </select>
                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split('-');
                    setSortBy(field);
                    setSortOrder(order as 'asc' | 'desc');
                  }}
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="createdAt-desc">新しい順</option>
                  <option value="createdAt-asc">古い順</option>
                  <option value="companyName-asc">会社名順</option>
                  <option value="status-asc">ステータス順</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    会社情報
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    担当者
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    目的
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ステータス
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    日時
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    アクション
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <React.Fragment key={lead.id}>
                    <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 text-gray-400 mr-2" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{lead.companyName}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {lead.employeeCount}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.name}</div>
                        {lead.department && (
                          <div className="text-sm text-gray-500">{lead.department}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Target className="h-4 w-4 text-gray-400 mr-2" />
                          {lead.purpose}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                          {lead.status === 'new' ? '新規' :
                           lead.status === 'contacted' ? '連絡済み' :
                           lead.status === 'qualified' ? '見込みあり' : '成約'}
                        </span>
                        <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(lead.priority)}`}>
                          {lead.priority === 'high' ? '高' :
                           lead.priority === 'normal' ? '中' : '低'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                          {new Date(lead.createdAt).toLocaleDateString('ja-JP')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {expandedId === lead.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </td>
                    </tr>
                    {expandedId === lead.id && (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">連絡先情報</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center">
                                  <Mail className="h-4 w-4 text-gray-400 mr-2" />
                                  <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">{lead.email}</a>
                                </div>
                                <div className="flex items-center">
                                  <Phone className="h-4 w-4 text-gray-400 mr-2" />
                                  <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">{lead.phone}</a>
                                </div>
                                {lead.position && (
                                  <div className="text-gray-600">役職: {lead.position}</div>
                                )}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">メッセージ</h4>
                              {lead.message ? (
                                <div className="text-sm text-gray-600 bg-white p-3 rounded border border-gray-200">
                                  <MessageSquare className="h-4 w-4 text-gray-400 mb-1" />
                                  <p>{lead.message}</p>
                                </div>
                              ) : (
                                <p className="text-sm text-gray-500">メッセージなし</p>
                              )}
                            </div>
                          </div>
                          <div className="mt-4 flex gap-2">
                            <select
                              value={lead.status}
                              onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                              className="text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                              <option value="new">新規</option>
                              <option value="contacted">連絡済み</option>
                              <option value="qualified">見込みあり</option>
                              <option value="converted">成約</option>
                            </select>
                            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                              メモを追加
                            </button>
                            <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">
                              メールを送信
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {pagination.totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                全 {pagination.total} 件中 {((pagination.page - 1) * pagination.limit) + 1} - {Math.min(pagination.page * pagination.limit, pagination.total)} 件を表示
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPagination(p => ({ ...p, page: p.page - 1 }))}
                  disabled={pagination.page === 1}
                  className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50"
                >
                  前へ
                </button>
                <span className="px-3 py-1">
                  {pagination.page} / {pagination.totalPages}
                </span>
                <button
                  onClick={() => setPagination(p => ({ ...p, page: p.page + 1 }))}
                  disabled={pagination.page === pagination.totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50"
                >
                  次へ
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}